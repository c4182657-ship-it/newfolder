// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/jobs/{id:Int}" page={JobDetailPage} name="jobDetail" />
      <Route path="/jobs/{id:Int}/apply" page={JobApplyPage} name="jobApply" />
      <Route path="/success" page={ApplicationSuccessPage} name="applicationSuccess" />
      {/* Admin disabled */}
      {/* <Route path="/admin" page={AdminPage} name="admin" /> */}
      <Route path="/resources" page={ResourcesPage} name="resources" />
      <Route path="/privacy" page={PrivacyPage} name="privacy" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
