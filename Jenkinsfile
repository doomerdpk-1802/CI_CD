def checkoutStage = load 'Jenkins/checkout.groovy'
def installStage  = load 'Jenkins/install.groovy'
def lintStage     = load 'Jenkins/lint.groovy'
def testStage     = load 'Jenkins/test.groovy'
def buildStage    = load 'Jenkins/build.groovy'

pipeline {
  agent any

  tools {
    nodejs 'Node 24.12'
  }

  stages {
    stage('Checkout') {
      steps { script { checkoutStage() } }
    }

    stage('Install') {
      steps { script { installStage() } }
    }

    stage('Lint') {
      steps { script { lintStage() } }
    }

    stage('Test') {
      steps { script { testStage() } }
    }

    stage('Build') {
      steps { script { buildStage() } }
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
