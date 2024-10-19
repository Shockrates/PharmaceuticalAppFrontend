import { createRouter, createWebHistory } from 'vue-router';
import ProductListComponent from '../components/ProductListComponent.vue'
import ProductComponent from '../components/ProductComponent.vue'
import AddProductComponent from '../components/AddProductComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'productsList',
        component: ProductListComponent,
      },
     
      {
        path: '/products/:id',
        name: 'product',
        component: ProductComponent,
      },
      {
        path: '/products/add',
        name: 'add-product',
        component: AddProductComponent,
      }
  ],
});

export default router;