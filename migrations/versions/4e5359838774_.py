"""empty message

Revision ID: 4e5359838774
Revises: 093d3585f721
Create Date: 2022-06-21 00:43:04.411643

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4e5359838774'
down_revision = '093d3585f721'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('schedule', 'full_name',
               existing_type=sa.VARCHAR(length=80),
               nullable=False)
    op.alter_column('schedule', 'monday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('schedule', 'monday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('schedule', 'tuesday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('schedule', 'tuesday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('schedule', 'wednesday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('schedule', 'wednesday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('schedule', 'thursday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('schedule', 'thursday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('schedule', 'friday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('schedule', 'friday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('schedule', 'saturday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('schedule', 'saturday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('schedule', 'sunday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    op.alter_column('schedule', 'sunday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('schedule', 'sunday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'sunday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'saturday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'saturday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'friday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'friday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'thursday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'thursday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'wednesday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'wednesday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'tuesday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'tuesday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'monday_end',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'monday_start',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)
    op.alter_column('schedule', 'full_name',
               existing_type=sa.VARCHAR(length=80),
               nullable=True)
    # ### end Alembic commands ###
