"""empty message

Revision ID: 7a26535e54b5
Revises: 1ccd980ef240
Create Date: 2022-06-20 23:16:15.792875

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7a26535e54b5'
down_revision = '1ccd980ef240'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('schedule', sa.Column('monday', sa.String(length=120), nullable=False))
    op.add_column('schedule', sa.Column('tuesday', sa.String(length=120), nullable=False))
    op.add_column('schedule', sa.Column('wednesday', sa.String(length=120), nullable=False))
    op.add_column('schedule', sa.Column('thursday', sa.String(length=120), nullable=False))
    op.add_column('schedule', sa.Column('friday', sa.String(length=120), nullable=False))
    op.add_column('schedule', sa.Column('saturday', sa.String(length=120), nullable=False))
    op.add_column('schedule', sa.Column('sunday', sa.String(length=120), nullable=False))
    op.create_unique_constraint(None, 'schedule', ['wednesday'])
    op.create_unique_constraint(None, 'schedule', ['thursday'])
    op.create_unique_constraint(None, 'schedule', ['monday'])
    op.create_unique_constraint(None, 'schedule', ['friday'])
    op.create_unique_constraint(None, 'schedule', ['saturday'])
    op.create_unique_constraint(None, 'schedule', ['sunday'])
    op.create_unique_constraint(None, 'schedule', ['tuesday'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'schedule', type_='unique')
    op.drop_constraint(None, 'schedule', type_='unique')
    op.drop_constraint(None, 'schedule', type_='unique')
    op.drop_constraint(None, 'schedule', type_='unique')
    op.drop_constraint(None, 'schedule', type_='unique')
    op.drop_constraint(None, 'schedule', type_='unique')
    op.drop_constraint(None, 'schedule', type_='unique')
    op.drop_column('schedule', 'sunday')
    op.drop_column('schedule', 'saturday')
    op.drop_column('schedule', 'friday')
    op.drop_column('schedule', 'thursday')
    op.drop_column('schedule', 'wednesday')
    op.drop_column('schedule', 'tuesday')
    op.drop_column('schedule', 'monday')
    # ### end Alembic commands ###
