"""empty message

Revision ID: 783da93882ac
Revises: 13dd3914e8d9
Create Date: 2022-05-31 21:21:37.200448

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '783da93882ac'
down_revision = '13dd3914e8d9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('username', sa.String(length=120), nullable=False))
    op.add_column('user', sa.Column('phone_number', sa.String(length=80), nullable=False))
    op.create_unique_constraint(None, 'user', ['username'])
    op.create_unique_constraint(None, 'user', ['phone_number'])
    op.drop_column('user', 'is_active')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'user', type_='unique')
    op.drop_constraint(None, 'user', type_='unique')
    op.drop_column('user', 'phone_number')
    op.drop_column('user', 'username')
    # ### end Alembic commands ###
