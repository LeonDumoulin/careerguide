export default function({ redirect, $storage }) {
    // If the user is not authenticated
    if (process.browser) {
      if (localStorage.getItem("auth") == null) {
          return redirect('/dashboard')
      }
    }
}
