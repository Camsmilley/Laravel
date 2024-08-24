<!-- resources/views/emails/booking-status-updated.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Status Update</title>
</head>
<body>
    <h1>Your Booking Has Been {{ ucfirst($booking->status) }}</h1>

    <p>Dear {{ $booking->guestName }},</p>

    @if($booking->status === 'confirmed')
        <p>We are pleased to inform you that your booking for {{ $booking->safariname }} has been confirmed.</p>
        <p>We look forward to providing you with an unforgettable experience!</p>
    @else
        <p>We regret to inform you that your booking for {{ $booking->safariname }} has been cancelled.</p>
        <p>If you have any questions about this cancellation or would like to make a new booking, please don't hesitate to contact us.</p>
    @endif

    <h2>Booking Details:</h2>
    <ul>
        <li>Safari: {{ $booking->safariname }}</li>
        <li>Arrival Date: {{ $booking->arrivalDate }}</li>
        <li>Number of People: {{ $booking->nop }}</li>
        <li>Number of Children: {{ $booking->noc }}</li>
    </ul>

    <p>If you have any questions or need further assistance, please don't hesitate to contact us.</p>

    <p>Thank you for choosing Treks Safari!</p>

    <p>Best regards,<br>Treks Safari Team</p>
</body>
</html>
