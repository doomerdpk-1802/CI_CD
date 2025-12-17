def call() {
  stage('Lint') {
    sh 'npm run lint'
  }
}
