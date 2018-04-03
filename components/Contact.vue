<template>
    <div>
        <h1 class="title">Contact us</h1>
        <form :on-submit="formSubmit">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Name">
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Name">
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Name">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <spa class="label">Location:</spa>
                    <label class="radio">
                        <input type="radio" name="question">
                        Amsterdam
                    </label>
                    <label class="radio">
                        <input type="radio" name="question">
                        Copenhagen
                    </label>
                    <label class="radio">
                        <input type="radio" name="question">
                        Malmö
                    </label>
                </div>
            </div>
            <div class="field">
                <label class="label">Message?</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Textarea"></textarea>
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
