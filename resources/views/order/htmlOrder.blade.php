<table>
    <thead>
    <tr>
        <td colspan="2">
            Thank you for your order!
        </td>
    </tr>
    <tr>
        <td colspan="2">
            # {{$order->id}}
        </td>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>
            {{$order->title}}
        </td>
        <td>
            {{$order->price}}
        </td>
    </tr>
    </tbody>
</table>