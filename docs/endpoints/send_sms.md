# Send SMS

Endpoint: `/send_sms/`

Method: `POST`

Description: Send an SMS message.

## Request Body Schema

```json
{
  "name": "string",
  "phoneNumber": "string",
  "message": "string"
}
