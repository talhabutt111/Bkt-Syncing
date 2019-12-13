'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('permissions', [
      {
        permission: 'manage',
        entity: 'all',
        slug: 'manage_all',
        created_at: new Date(),
        updated_at: new Date()
      },
      //Order
      {
        permission: 'create',
        entity: 'order',
        slug: 'create_order',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'read',
        entity: 'order',
        slug: 'read_order',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'update',
        entity: 'order',
        slug: 'update_order',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'delete',
        entity: 'order',
        slug: 'delete_order',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'manage',
        entity: 'order',
        slug: 'manage_order',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'read',
        entity: 'orderDetails',
        slug: 'read_orderDetails',
        created_at: new Date(),
        updated_at: new Date()
      },
      //invoice
      {
        permission: 'create',
        entity: 'invoice',
        slug: 'create_invoice',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'read',
        entity: 'invoice',
        slug: 'read_invoice',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'update',
        entity: 'invoice',
        slug: 'update_invoice',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'delete',
        entity: 'invoice',
        slug: 'delete_invoice',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'manage',
        entity: 'invoice',
        slug: 'manage_invoice',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'read',
        entity: 'invoiceDetails',
        slug: 'read_invoiceDetails',
        created_at: new Date(),
        updated_at: new Date()
      },
      // company
      {
        permission: 'create',
        entity: 'company',
        slug: 'create_company',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'read',
        entity: 'company',
        slug: 'read_company',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'update',
        entity: 'company',
        slug: 'update_company',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'delete',
        entity: 'company',
        slug: 'delete_company',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'manage',
        entity: 'company',
        slug: 'manage_company',
        created_at: new Date(),
        updated_at: new Date()
      },
      //product-category
      {
        permission: 'create',
        entity: 'productCategory',
        slug: 'create_productCategory',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'read',
        entity: 'productCategory',
        slug: 'read_productCategory',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'update',
        entity: 'productCategory',
        slug: 'update_productCategory',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'delete',
        entity: 'productCategory',
        slug: 'delete_productCategory',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'manage',
        entity: 'productCategory',
        slug: 'manage_productCategory',
        created_at: new Date(),
        updated_at: new Date()
      },
      //product
      {
        permission: 'create',
        entity: 'product',
        slug: 'create_product',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'read',
        entity: 'product',
        slug: 'read_product',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'update',
        entity: 'product',
        slug: 'update_product',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'delete',
        entity: 'product',
        slug: 'delete_product',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'manage',
        entity: 'product',
        slug: 'manage_product',
        created_at: new Date(),
        updated_at: new Date()
      },
      //brand
      {
        permission: 'create',
        entity: 'brand',
        slug: 'create_brand',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'read',
        entity: 'brand',
        slug: 'read_brand',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'update',
        entity: 'brand',
        slug: 'update_brand',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'delete',
        entity: 'brand',
        slug: 'delete_brand',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'manage',
        entity: 'brand',
        slug: 'manage_brand',
        created_at: new Date(),
        updated_at: new Date()
      },
      //inventories
      {
        permission: 'create',
        entity: 'inventories',
        slug: 'create_inventories',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'read',
        entity: 'inventories',
        slug: 'read_inventories',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'update',
        entity: 'inventories',
        slug: 'update_inventories',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'delete',
        entity: 'inventories',
        slug: 'delete_inventories',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'manage',
        entity: 'inventories',
        slug: 'manage_inventories',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'read',
        entity: 'inventoryHistories',
        slug: 'read_inventoryHistories',
        created_at: new Date(),
        updated_at: new Date()
      },
      //role
      {
        permission: 'create',
        entity: 'role',
        slug: 'create_role',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'read',
        entity: 'role',
        slug: 'read_role',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'update',
        entity: 'role',
        slug: 'update_role',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'delete',
        entity: 'role',
        slug: 'delete_role',
        created_at: new Date(),
        updated_at: new Date()
      },
      //user
      {
        permission: 'create',
        entity: 'user',
        slug: 'create_user',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'read',
        entity: 'user',
        slug: 'read_user',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'update',
        entity: 'user',
        slug: 'update_user',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'delete',
        entity: 'user',
        slug: 'delete_user',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'manage',
        entity: 'user',
        slug: 'manage_user',
        created_at: new Date(),
        updated_at: new Date()
      },
      //vendor
      {
        permission: 'create',
        entity: 'vendor',
        slug: 'create_vendor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'read',
        entity: 'vendor',
        slug: 'read_vendor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'update',
        entity: 'vendor',
        slug: 'update_vendor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'delete',
        entity: 'vendor',
        slug: 'delete_vendor',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        permission: 'manage',
        entity: 'vendor',
        slug: 'manage_vendor',
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('permissions', null, {});
  }
};
