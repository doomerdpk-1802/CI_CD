def call() {
  stage('Checkout Code') {
    checkout scm
  }
}
