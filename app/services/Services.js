const database = require('../models')

class Services {
  constructor(modelName) {
    this.modelName = modelName
  }

  async catchAllRegisters() {
    return database[this.modelName].findAll()
  }

  async catchOneRegister() {

  }

  async createRigester() {

  }

  async updateRegister() {

  }

  async deleteRegister() {
      
  }
}

module.exports = Services