<template>
    <div>
        <h1 class="title">Donate</h1>
        <form :on-submit="formSubmit">
            <div class="field">
                <div class="control">
                    <spa class="label">Location:</spa>
                    <label class="radio">
                        <input type="radio" name="question">
                        IDEAL
                    </label>
                    <label class="radio">
                        <input type="radio" name="question">
                        PayPal
                    </label>
                    <label class="radio">
                        <input type="radio" name="question">
                        Bitcoin
                    </label>
                </div>
            </div>
            <div class="field">
                <label class="label">Amount</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Name">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
 export default {
     methods: {
         formSubmit() {}
     }
 }
</script>
