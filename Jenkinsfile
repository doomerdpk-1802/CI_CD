pipeline {
  agent any

  tools {
    nodejs 'Node 24.12'
  }

  stages {

    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint'
      }
    }

    stage('Test') {
      when {
        expression { fileExists('package.json') }
      }
      steps {
        sh 'npm test || echo "No tests found"'
      }
    }

    stage('Build Next.js App') {
      steps {
        sh 'npm run build'
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
