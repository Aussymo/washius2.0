"""empty message

Revision ID: b40ce1ea8041
Revises: 783da93882ac
Create Date: 2022-06-09 00:49:02.800171

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b40ce1ea8041'
down_revision = '783da93882ac'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('events',
    sa.Column('event_id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(length=120), nullable=False),
    sa.Column('date', sa.String(length=80), nullable=False),
    sa.Column('date_completed', sa.String(length=120), nullable=False),
    sa.Column('company', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('event_id'),
    sa.UniqueConstraint('date'),
    sa.UniqueConstraint('full_name')
    )
    op.create_table('schedule',
    sa.Column('schedule_id', sa.Integer(), nullable=False),
    sa.Column('full_name', sa.String(length=80), nullable=False),
    sa.Column('day', sa.String(length=120), nullable=False),
    sa.Column('start_time', sa.String(length=120), nullable=False),
    sa.Column('end_time', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('schedule_id'),
    sa.UniqueConstraint('day'),
    sa.UniqueConstraint('end_time'),
    sa.UniqueConstraint('full_name'),
    sa.UniqueConstraint('start_time')
    )
    op.add_column('user', sa.Column('full_name', sa.String(length=120), nullable=False))
    op.drop_constraint('user_username_key', 'user', type_='unique')
    op.create_unique_constraint(None, 'user', ['full_name'])
    op.drop_column('user', 'username')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('username', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'user', type_='unique')
    op.create_unique_constraint('user_username_key', 'user', ['username'])
    op.drop_column('user', 'full_name')
    op.drop_table('schedule')
    op.drop_table('events')
    # ### end Alembic commands ###