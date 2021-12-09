# **Scroll On Navigation**
Place this component within the Router on App.js to automatically send the user to the top of the page when they navigate from one page to the next.
```App.js
function App() {
  return (
    <div>
      <Router>
        <Header />
        <ScrollToTop />
        <PageView />
        <Footer />
      </Router>
    </div>
  );
}
```
[BACK](../../../../README.md)