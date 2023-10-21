'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Todos',[
      {
        title:'Pohon',
        status:'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      title:'Rumput',
      status:'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
    title:'Ranting',
    status:'active',
    createdAt: new Date(),
    updatedAt: new Date()
  },
{
  title:'Burung',
  status:'active',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  title:'Langit',
  status:'active',
  createdAt: new Date(),
  updatedAt: new Date()
}
  ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
