

<template>
    <div >
      56546445
    </div>
</template>

<script>
export default {
    name: 'Error403',
    mounted() {
        this.ajax.get('/test').then((response) => {
            console.log(response.data.name)
        }).catch((error) => {
    
        });
    },
    methods: {
      
    }
};
</script>
