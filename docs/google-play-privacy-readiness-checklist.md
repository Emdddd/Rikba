# Google Play Privacy Readiness Checklist — Rikba Driver

App: **Rikba Driver**
Package: **com.rikba.provider**
Live privacy policy URL: **https://rikba.eu/legal/privacy-policy/**

Rejection being fixed: `Invalid Privacy policy — "LOCATION data accessed by the app but not disclosed in privacy policy"`

## Privacy policy (now satisfied by this repo)

- [x] Privacy Policy URL points to the updated live policy (`/legal/privacy-policy/`).
- [x] Privacy Policy URL is public (GitHub Pages, no auth).
- [x] Privacy Policy URL uses HTTPS (`https://rikba.eu`).
- [x] Privacy Policy URL does not require login.
- [x] Policy clearly applies to Rikba Driver (dedicated "Location / GPS Data" section names the Rikba Driver app).
- [x] Policy discloses GPS/location data.
- [x] Policy explains purpose of location collection (availability, assignment, navigation, live tracking, ETA, route management, dispatch/admin monitoring, safety, support, fraud prevention, service improvement).
- [x] Policy explains sharing of location data (riders, dispatchers/admins, map/navigation providers, backend/cloud/service providers, legal/regulatory authorities).
- [x] Policy explains user controls (manage/disable in device settings; disabling may break the Driver app).
- [x] Policy does not contradict app behaviour (no "we do not collect location" statements exist).
- [x] Policy covers retention, security, contact (info@rikba.eu), and data deletion (links to /legal/account-deletion).

## Manual steps still required in Google Play Console (not done here)

- [ ] Confirm the Privacy Policy URL in Play Console is exactly `https://rikba.eu/legal/privacy-policy/`.
- [ ] Data Safety section must declare **Location** data collection.
- [ ] Declare **Precise location** if the app uses precise GPS.
- [ ] Declare **Approximate location** if the app uses approximate location.
- [ ] Data Safety "shared" status must match the policy (location is shared — declare sharing).
- [ ] Data Safety must mark whether location is **required** for app functionality (it is, for a driver app).
- [ ] **Background location:** only declare it in Play Console AND add an in-app prominent disclosure / runtime consent **if the mobile app actually requests background location**. This was NOT confirmed from this website repo — verify against the Android app's manifest (`ACCESS_BACKGROUND_LOCATION`). Do not declare background location unless the app truly uses it; a false declaration is itself a rejection risk.
- [ ] Resubmit the app for review after updating the policy URL and Data Safety section.

## Notes
- The website is a Next.js static export deployed to GitHub Pages from the `main` branch; the policy goes live automatically on merge.
- Background-location wording was deliberately omitted from the policy because it could not be confirmed from this repo. If the Android app uses `ACCESS_BACKGROUND_LOCATION`, add a background-location paragraph to the policy as well to stay consistent with Data Safety.
