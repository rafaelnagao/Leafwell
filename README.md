<<<<<<< HEAD
<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://staging.medicalcard.io/assets/hippocratica-logo-8b28f312ba76af0be33f26017d0fab55e6bde69b713f9e18b513c52ff26361c0.svg" alt="Leafwell"></a>
</p>

<h3 align="center">LEAFWELL TEST</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success?style=flat-square)]() 
  [![Leafwell](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/mfn56j&style=flat-square&logo=cypress)](https://cloud.cypress.io/projects/mfn56j/runs)
  [![GitHub Issues](https://img.shields.io/github/issues/rafaelnagao/Leafwell?color=FF0000&style=flat-square)](https://github.com/rafaelnagao/Leafwell/issues)

</div>

---

<p align="center"> This test is an assessment for the website Leafwell. As there are sensitive data, I'm going to make it a private project only. 🚀
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
This test was created from an assessment for a QA Engineer vacancy. All tests done are from the Leafwell website, which is the contracting company.

Leafwell is a company working on access to medical marijuana. The functionalities of creating a new account on the medicalcard.io website were tested.

## 🏁 Getting Started <a name = "getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### ⛏️ Prerequisites
This test was built using:


- Visual Studio Code v1.77.3 [![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/download)
- Node.JS v18.15.0 [![Node.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/download)
- Git v2.40.0.windows.1 [![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/downloads)
- Cypress v12.10.0 [![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)](https://docs.cypress.io/guides/getting-started/installing-cypress)


### Installing
After installing all the applications described above, make a local clone of the project and branch to your repository, so that all changes will be saved correctly.

Access the directory where the repository will be cloned and type:

```
$ git init
```

This creates a new subdirectory named .git that contains all of your necessary repository files — a Git repository skeleton.

You clone a repository with git clone <url>. For example, if you want to clone the Git linkable library called libgit2, you can do so like this:

```
$ git clone https://github.com/rafaelnagao/Leafwell.git
```

or by SSH (if you already have a key configured)

```
$ git clone git@github.com:rafaelnagao/Leafwell.git
```

Open your cloned local directory and enjoy!

## 🔧 Running the tests <a name = "tests"></a>
The tests are in the directory "~/Leafwell/cypress/e2e/Leafwell.cy.js"

You can go to the terminal and open Cypress or run it through the terminal itself.

```
npx cypress open
```
or
```
npx cypress run
```

### Break down into end to end tests
This test only tests the basic and critical functionality in creating a new user. The data used is false, only my email is true. 😎

To speed things up and not take too much time, I didn't do negative tests, only positive ones. ➕

I had some problems creating the scripts:

- Cypress is unable to use and test iframes, the DEV environment, which was provided by the company, has an iframe right at the beginning. But I managed to find the source of the iframe and test directly in the source: staging environment.

- Every time I ran the test, the site kept a cache of marked options or written responses, so I had to use the .clear() command or make Cypress identify if the element was already selected, as this impacted the test .

- I also had problems with the CSS pseudo-element, which should be selected, but I managed to get around isolating the element and forcing the click.

- As the password creation url is dynamic, I had to do a test suit with account and password creation.

- To test uploads in Cypress it is necessary to use the Blob library, I also added the file to the Leafewell/cypress/fixtures folder.

Any questions, I am always available and open to suggestions and sharing new knowledge. 💡

## ✍️ Authors <a name = "authors"></a>
- [@rafaelnagao](https://github.com/rafaelnagao) - QA Analyst

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- Thank you very much for reviewing this project!
- Visit my [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafael-nagao-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-22846019b)
=======
# Leafwell
This test is an assessment for the website Leafwell, as there are sensitive data, I'm going to make it a private project only.
>>>>>>> origin/main
