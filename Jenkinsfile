pipeline {
    agent any

    tools {nodejs "node"}

    stages {
    
        stage('e2e Tests') {
            steps {
                sh 'npx cypress run --reporter json'
            }
        }
    }
}
