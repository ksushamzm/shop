const { createApp, ref, onMounted } = Vue;

const Root = {
    template: `
   <input ref ="input">
    <div> </div>
    `,
    setup () {
        const input = ref();
        onMounted (() => {
            console.log (input.value)
        })

        return {
            input
        }
    }
};

const app = createApp(Root);

app.mount('#app');