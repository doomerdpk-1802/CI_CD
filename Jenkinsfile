pipeline {
  agent any

  tools {
    nodejs 'Node 24.12'
  }

  stages {

    stage('CI Pipeline') {
      steps {
        script {
          load 'Jenkins/checkout.groovy'
          load 'Jenkins/install.groovy'
          load 'Jenkins/lint.groovy'
          load 'Jenkins/test.groovy'
          load 'Jenkins/build.groovy'
        }
      }
    }
  }
}
