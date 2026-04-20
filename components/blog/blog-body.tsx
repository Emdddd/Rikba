type BlogBlock =
  | { type: "h2" | "h3"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "unordered-list"; items: string[] }
  | { type: "ordered-list"; items: string[] }

function parseBlogBody(body: string): BlogBlock[] {
  const lines = body.split(/\r?\n/)
  const blocks: BlogBlock[] = []
  let paragraphLines: string[] = []
  let listType: "unordered-list" | "ordered-list" | null = null
  let listItems: string[] = []

  const flushParagraph = () => {
    const text = paragraphLines.join(" ").trim()
    if (text) {
      blocks.push({ type: "paragraph", text })
    }
    paragraphLines = []
  }

  const flushList = () => {
    if (listType && listItems.length > 0) {
      blocks.push({ type: listType, items: [...listItems] })
    }
    listType = null
    listItems = []
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (!line) {
      flushParagraph()
      flushList()
      continue
    }

    if (line.startsWith("## ")) {
      flushParagraph()
      flushList()
      blocks.push({ type: "h2", text: line.slice(3).trim() })
      continue
    }

    if (line.startsWith("### ")) {
      flushParagraph()
      flushList()
      blocks.push({ type: "h3", text: line.slice(4).trim() })
      continue
    }

    if (line.startsWith("- ")) {
      flushParagraph()
      if (listType !== "unordered-list") {
        flushList()
        listType = "unordered-list"
      }
      listItems.push(line.slice(2).trim())
      continue
    }

    if (/^\d+\.\s/.test(line)) {
      flushParagraph()
      if (listType !== "ordered-list") {
        flushList()
        listType = "ordered-list"
      }
      listItems.push(line.replace(/^\d+\.\s/, "").trim())
      continue
    }

    flushList()
    paragraphLines.push(line)
  }

  flushParagraph()
  flushList()

  return blocks
}

export function BlogBody({ body }: { body: string }) {
  const blocks = parseBlogBody(body)

  return (
    <div className="space-y-5 text-base leading-8 text-muted-foreground">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={`${block.text}-${index}`} className="pt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {block.text}
            </h2>
          )
        }

        if (block.type === "h3") {
          return (
            <h3 key={`${block.text}-${index}`} className="pt-2 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              {block.text}
            </h3>
          )
        }

        if (block.type === "unordered-list") {
          return (
            <ul key={`unordered-${index}`} className="space-y-3 pl-2">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )
        }

        if (block.type === "ordered-list") {
          return (
            <ol key={`ordered-${index}`} className="space-y-3 pl-2">
              {block.items.map((item, itemIndex) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/12 text-sm font-semibold text-primary">
                    {itemIndex + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          )
        }

        return <p key={`${block.text}-${index}`}>{block.text}</p>
      })}
    </div>
  )
}