import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/jobs/{id:Int}" page={JobDetailPage} name="jobDetail" />
      <Route path="/jobs/{id:Int}/apply" page={JobApplyPage} name="jobApply" />
      <Route
        path="/success"
        page={ApplicationSuccessPage}
        name="applicationSuccess"
      />
      <Route path="/privacy" page={PrivacyPage} name="privacy" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
