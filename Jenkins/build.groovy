def call() {
  stage('Build Next.js App') {
    sh 'npm run build'
  }
}
