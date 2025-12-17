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
          def checkoutStage = load 'Jenkins/checkout.groovy'
          def installStage  = load 'Jenkins/install.groovy'
          def lintStage     = load 'Jenkins/lint.groovy'
          def testStage     = load 'Jenkins/test.groovy'
          def buildStage    = load 'Jenkins/build.groovy'

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
