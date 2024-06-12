from dapp import Transaction, handle_advance, handle_inspect

# Teste para a classe Transaction
def test_transaction():
    transaction = Transaction(
        sender="sender",
        receiver="receiver",
        transaction_id="transaction_id",
        product_id="product_id",
        quantity="quantity",
        measure_unit="measure_unit",
        price=100,
        timestamp=123456789
    )
    assert transaction.to_dict() == {
        "sender": "sender",
        "receiver": "receiver",
        "transaction_id": "transaction_id",
        "product_id": "product_id",
        "quantity": "quantity",
        "measure_unit": "measure_unit",
        "price": 100,
        "timestamp": 123456789
    }