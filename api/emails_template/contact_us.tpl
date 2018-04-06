Hey <%- params.name %> contacted us

Here are his details:
<% for(let k in params) {%>
<%- k %>:
--
<%- params[k] %>

<% } %>