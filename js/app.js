Vue.component('custom-table', {
    props: {
        tablecolor: String,
        showborder: Boolean,
        content: Array,
    },
    template: `
        <div class="my-4 w-1/4">
            <table :class="'bg-'+tablecolor+'-500'" class="table-auto rounded min-w-full">
                <thead :class="showborder && 'border-b border-white'">
                  <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="item in content" :class="item.bg">
                        <td v-for="item in item.list">
                            {{item}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
})

const app = new Vue({
    el: '#app',
    data: {
        title: 'Componentes',
        array1: [
            {
                bg: 'bg-transparent',
                list: ['Ciruela', '$143', '63']
            },
            {
                bg: 'bg-transparent',
                list: ['Manzana ', '$89', '43']
            },
            {
                bg: 'bg-transparent',
                list: ['Pera', '$54', '76']
            }
        ],
        array2: [
            {
                bg: 'bg-transparent',
                list: ['Apio', '$43', '123']
            },
            {
                bg: 'bg-transparent',
                list: ['Cebolla', '$25', '54']
            },
            {
                bg: 'bg-transparent',
                list: ['Esparrago', '$28', '79']
            }
        ],
        array3: [
            {
                bg: 'bg-transparent',
                list: ['Zapallo', '$43', '123']
            },
            {
                bg: 'bg-transparent',
                list: ['Calabaza', '$25', '54']
            },
            {
                bg: 'bg-black',
                list: ['Rabanito', '$28', '79']
            }
        ],
    },
    methods: {

    }
})