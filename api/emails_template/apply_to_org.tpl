Hey there a new stundent <%- params.name %> did apply!

Here his details:
<% for(let k in params) {%>
🤖 <%- k %>:
--
<%- params[k] %>

<% } %>