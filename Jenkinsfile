pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'build stage'
      }
    }

    stage('test') {
      steps {
        echo 'test stage'
      }
    }

    stage('staging') {
      steps {
        echo 'deploy in staging env'
      }
    }

    stage('uat') {
      steps {
        echo 'uat stage'
      }
    }

    stage('production') {
      steps {
        echo 'deploy in prod env'
      }
    }

  }
}