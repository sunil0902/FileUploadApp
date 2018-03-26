# FileUploadApp

## Description
This application runs on port 8000 and exposes a "/upload" endpoint. You can upload a file(.pdf, .txt, .jpg, .docx, etc...) to the server using the "/upload" endpoint.
Please follow the step below to run and test the application.

### Steps

#### To start the server

```command
node server.js
```
Make a POST request to the "/upload" endpoint with file attached to the request body.

```command
# You will see
file saved on server - 200 OK
```
