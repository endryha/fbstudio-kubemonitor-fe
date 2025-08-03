# **App Name**: KubeMon

## Core Features:

- Dashboard Layout: Displays deployments in Services and Infrastructure tabs.
- Real-Time Updates: Automatically refreshes data at configurable intervals to give a near real-time snapshot of deployment status.
- Deployment List View: Presents key deployment information using a card-based layout that reflects category (e.g. status)
- Enhanced Search & Filtering: Implements robust filtering across deployment name, description, and version. Status category filters offer easy navigation, enhanced by advanced options for namespace, chart version, and date range, with flexible sort options (name, status, last deployed, app version).
- Deployment Detail View: Provides an in-depth view of deployments via modal/side panel, offering comprehensive information including manifest details, Helm release data, and Kubernetes resource metadata with a formatted JSON view toggle.

## Style Guidelines:

- Primary color: HSL(210, 67%, 47%) which converts to RGB hex value #3879F4, offering a professional and reliable aesthetic suitable for monitoring applications.
- Background color: Light gray with HSL(210, 20%, 95%), resulting in RGB hex value #F0F4F9; provides a soft, neutral backdrop to ensure legibility and reduce visual fatigue.
- Accent color: HSL(180, 53%, 40%), represented as RGB hex value #32A59E, for highlighting interactive elements and key status indicators without being distracting.
- Headers: 'Space Grotesk' sans-serif, for a tech-forward but approachable feel.
- Body: 'Inter' sans-serif, offering a clean, neutral design ideal for data-heavy displays.
- Code/Technical Data: 'Source Code Pro' monospace font for readability of technical data.
- Implement a consistent 8px grid for spacing across all components to maintain a clean and orderly interface.