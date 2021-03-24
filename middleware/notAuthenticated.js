export default function({ $storage, redirect }) {
    // If the user is authenticated redirect to home page
    if (process.browser) {
      if (localStorage.getItem("auth")) {
        return redirect('/dashboard/faculity')
      }
    }

}
