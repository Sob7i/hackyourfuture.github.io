<template>
  <div>
    <div class="field is-horizontal">
      <label class="field-label">Name</label>
      <div class="field-body">
        <input class="input" type="text" placeholder="Name">
      </div>
    </div>
    <div class="field is-horizontal">
      <label class="field-label">Address</label>
      <div class="field-body">
        <input class="input" type="text" placeholder="Address">
      </div>
    </div>
    <div class="field is-horizontal">
      <label class="field-label">Email</label>
      <div class="field-body">
        <input class="input" type="text" placeholder="Email">
      </div>
    </div>
    <div class="field is-horizontal">
      <label class="field-label">Phone</label>
      <div class="field-body">
        <input class="input" type="text" placeholder="Phone">
      </div>
    </div>
    <div class="field is-horizontal">
      <label class="field-label">Do you have already a computer?</label>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <label class="radio">
              <input type="radio" name="has-computer" value="yes">
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="has-computer" value="no">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <label class="field-label">Educational Background</label>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <textarea class="textarea" placeholder="Tell us about you"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
