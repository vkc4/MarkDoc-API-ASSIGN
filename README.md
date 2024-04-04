# MarkDoc-API-ASSIGN

# Express API Documentation

This documentation outlines the endpoints and functionality of the Express API.

## Getting Started

Ensure you have Node.js and npm installed on your machine. Then, follow these steps:

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Start the server by running `npm start`.

The server will run on port 3000 by default, or you can specify a port using the `PORT` environment variable.

## API Endpoints

### 1. Create Checkout Session

- **URL:** `/api/create-checkout-session`
- **Method:** `GET`
- **Description:** Create a checkout session.
- **Response:**
  ```json
  {
    "apikey": "string"
  }


### 2. Make Toingg

- **URL:** `/api/make_toingg`
- **Method:** `GET`
- **Description:** Make a toingg.
- **Response:**
  ```json
  {
    "id": 173,
    "message": "Toingg created successfully"
  }


### 3. Make Toingg Details

- **URL:** `/api/make_toingg_details`
- **Method:** `GET`
- **Description:** Retrieve details of a toingg.
- **Response:**
  ```json
  {
    "campaignName": "string",
    "campaignScript": "string",
    "name": "string",
    "phoneNumber": "string"
  }


### 4. Make Batch Toingg

- **URL:** `/api/make_batch_toingg`
- **Method:** `GET`
- **Description:** Create batch toingg.
- **Response:**
  ```json
  {
    "campaign": "string",
    "numberList": [
      {
        "clientName": "string",
        "clientNumber": "string"
      }
    ]
  }


### 5. Hang Up Call

- **URL:** `/api/hang_up_call`
- **Method:** `GET`
- **Description:** Hang up a call.
- **Response:**
  ```json
  {
    "detail": [
      {
        "loc": ["parameter_name", 0],
        "msg": "Validation error message",
        "type": "validation_error"
      }
    ]
  }


### 6. Send SMS

- **URL:** `/api/send_sms`
- **Method:** `GET`
- **Description:** Send an SMS.
- **Response:**
  ```json
  {
    "name": "string",
    "phoneNumber": "string",
    "message": "string"
  }


### 7. Webhook

- **URL:** `/api/webhook`
- **Method:** `GET`
- **Description:** Handle webhook requests.
- **Response:**
  ```json
  {
    "response": "string"
  }
