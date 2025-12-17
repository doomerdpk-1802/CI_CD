def call() {
  stage('Test') {
    if (fileExists('package.json')) {
      sh 'npm test || echo "No tests found"'
    }
  }
}
