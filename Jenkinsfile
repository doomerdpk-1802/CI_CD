pipeline {
  agent any

  tools {
    nodejs 'Node 24.12'
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('CI Pipeline') {
      steps {
        script {
          def checkoutStage = load 'jenkins/checkout.groovy'
          def installStage  = load 'jenkins/install.groovy'
          def lintStage     = load 'jenkins/lint.groovy'
          def testStage     = load 'jenkins/test.groovy'
          def buildStage    = load 'jenkins/build.groovy'

          checkoutStage()
          installStage()
          lintStage()
          testStage()
          buildStage()
        }
      }
    }
  }

  post {
    success {
      echo '✅ Build successful!'
    }
    failure {
      echo '❌ Build failed!'
    }
  }
}
