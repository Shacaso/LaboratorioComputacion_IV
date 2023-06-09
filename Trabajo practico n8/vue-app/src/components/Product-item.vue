<template>
    <div class="template-item">
        <div class="card mb-3 rounded-5" style="max-height: 170px;">
            <div class="row g-0">
                <div class="col">
                    <img class="size-img rounded-5"
                        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1678352679570/88aebfe3-3bfc-4aca-a068-cf97991d13df.svg"
                        alt="react img">
                </div>
                <div class="col-9">
                    <div class="card-body">
                        <h5 class="card-title">Instrumento pep</h5>
                        <p>$ 300</p>
                        <p>Costo de envio Interior de Argentina $100</p>
                        <p>200 vendidos</p>
                    </div>
                </div>
                <div class="col">
                    <button>View</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProductItem',
    props: {
        product: Object
    }
});
</script>

<style scoped>
.size-img {
    height: 170px;
    width: 100%;
    object-fit: cover;
}
</style>