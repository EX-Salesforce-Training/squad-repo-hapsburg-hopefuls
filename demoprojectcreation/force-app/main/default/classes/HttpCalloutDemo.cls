public class HttpCalloutDemo {
    public static void makeCallout() {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://jsonplaceholder.typicode.com/users/1');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        
        
        Map<String, Object> company = new Map<String, Object>();
        System.debug(response.getStatusCode() + ' ' + response.getStatus());
        
        if (response.getStatusCode() == 200) {
            //user = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            JSONParse root = new JSONParse(response.getBody());
            company = root.get('company').asMap();
            System.debug(root.get('company'));
        }
        
        System.debug(company);
        
    }
}