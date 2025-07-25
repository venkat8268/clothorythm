# Clothorythm
**AI Powered Fashion App**

Clothorythm is a modern fashion-forward web application enhanced with AI capabilities. It aims to revolutionize the way users discover, style, and interact with clothing by offering intelligent outfit recommendations and a sleek, user-centric interface.

## 🚀 Why Clothorythm is Different

Instead of relying on preconfigured boilerplates like `create-react-app`, this project was built **from scratch using Parcel** — a fast, zero-config bundler. This approach provides:

- 💡 Full control over project structure and configuration
- ⚡ Lightning-fast bundling and hot-reloading via Parcel
- 🧱 Minimal dependencies and bloat for a cleaner setup
- 🔧 Easier debugging and transparent build process

## ✅ Built So Far

**🔐 Firebase Authentication (Login/Signup)**

- Created a Firebase project and enabled Email/Password authentication.
- Installed Firebase SDK and initialized it in the React project.
- Implemented signUp, login, and signOut functionalities using Firebase Auth methods.
- Used onAuthStateChanged to persist user sessions and track auth status in real-time.

**🚀 Deployment**

- Installed Firebase CLI and initialized Firebase Hosting.
- Built the production version using npm run build.
- Deployed the app to Firebase using firebase deploy.

**🧠 Redux Store Setup**

- Installed and configured Redux Toolkit.
- Created a userSlice to manage user state (addUser, removeUser).
- Connected the Redux store to the React app using <Provider>.

**🔄 Synced Firebase Auth with Redux**

- On successful login/signup, dispatched user data to the Redux store.
- On logout, cleared user data from the Redux store.
- Listened for Firebase auth state changes and updated Redux store accordingly.
- Used useSelector to access user data across components.
- Based on Redux user state, handled conditional redirects and UI behavior.

