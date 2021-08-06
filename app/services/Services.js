const database = require('../models')

class Services {
  constructor(modelName) {
    this.modelName = modelName
  }

  async catchAllRegisters(where = {}) {
    return database[this.modelName].findAll({ where: { ...where } })
  }

  async catchOneRegister(where = {}) {
    return database[this.modelName].findOne({ where: { ...where } })
  }

  async createRegister(datas) {
    return database[this.modelName].create(datas)
  }

  async updateRegister(updatedDatas, id, transaction = {}) {
    return database[this.modelName].update(updatedDatas, { where: { id: id },
      transaction
    })
  }

  async updateRegisters(updatedDatas, where, transaction = {}) {
    return database[this.modelName].update(updatedDatas, { where: { ...where },
      transaction
    })
  }

  async deleteRegister(id) {
    return database[this.modelName].destroy({ where: { id: id } })
  }

  async restoreRegister(id) {
    return database[this.modelName].restore({ where: { id: id } })
  }

  async consultDeletedRegister(id) {
    return database[this.modelName].findOne({ paranoid: false, where: { id: Number(id) } })
  }

  async findAndCountRegisters(where = {}, aggregators) {
    return database[this.modelName].findAndCountAll({ ...where }, aggregators)
  }
}

module.exports = Services
