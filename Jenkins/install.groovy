def call() {
  stage('Install Dependencies') {
    sh 'npm ci'
  }
}
