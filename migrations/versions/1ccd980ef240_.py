"""empty message

Revision ID: 1ccd980ef240
Revises: b40ce1ea8041
Create Date: 2022-06-18 00:22:02.961283

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1ccd980ef240'
down_revision = 'b40ce1ea8041'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('ghost_car',
    sa.Column('ghostcar_id', sa.Integer(), nullable=False),
    sa.Column('conveyor_starts', sa.String(length=80), nullable=False),
    sa.Column('roller_up', sa.String(length=80), nullable=False),
    sa.Column('presoak', sa.String(length=80), nullable=False),
    sa.Column('scented_spray', sa.String(length=80), nullable=False),
    sa.Column('cta', sa.String(length=80), nullable=False),
    sa.Column('fusion_bath', sa.String(length=80), nullable=False),
    sa.Column('tire_brushes', sa.String(length=80), nullable=False),
    sa.Column('side_blasters', sa.String(length=80), nullable=False),
    sa.Column('first_topbrush', sa.String(length=80), nullable=False),
    sa.Column('wrap1_ds_ps', sa.String(length=80), nullable=False),
    sa.Column('fusion_prime', sa.String(length=80), nullable=False),
    sa.Column('wrap2_ds_ps', sa.String(length=80), nullable=False),
    sa.Column('bumper_blaster', sa.String(length=80), nullable=False),
    sa.Column('second_ctas', sa.String(length=80), nullable=False),
    sa.Column('girll_brushes', sa.String(length=80), nullable=False),
    sa.Column('top_omni', sa.String(length=80), nullable=False),
    sa.Column('side_omni', sa.String(length=80), nullable=False),
    sa.Column('fusion_wax', sa.String(length=80), nullable=False),
    sa.Column('ceramic_shine', sa.String(length=80), nullable=False),
    sa.Column('topbrush2', sa.String(length=80), nullable=False),
    sa.Column('fusion_rinse', sa.String(length=80), nullable=False),
    sa.Column('fusion_seal', sa.String(length=80), nullable=False),
    sa.Column('rain_repel', sa.String(length=80), nullable=False),
    sa.Column('clear_coat', sa.String(length=80), nullable=False),
    sa.Column('tire_shine', sa.String(length=80), nullable=False),
    sa.Column('dryers', sa.String(length=80), nullable=False),
    sa.Column('mammoth_ears', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('ghostcar_id'),
    sa.UniqueConstraint('bumper_blaster'),
    sa.UniqueConstraint('ceramic_shine'),
    sa.UniqueConstraint('clear_coat'),
    sa.UniqueConstraint('conveyor_starts'),
    sa.UniqueConstraint('cta'),
    sa.UniqueConstraint('dryers'),
    sa.UniqueConstraint('first_topbrush'),
    sa.UniqueConstraint('fusion_bath'),
    sa.UniqueConstraint('fusion_prime'),
    sa.UniqueConstraint('fusion_rinse'),
    sa.UniqueConstraint('fusion_seal'),
    sa.UniqueConstraint('fusion_wax'),
    sa.UniqueConstraint('girll_brushes'),
    sa.UniqueConstraint('mammoth_ears'),
    sa.UniqueConstraint('presoak'),
    sa.UniqueConstraint('rain_repel'),
    sa.UniqueConstraint('roller_up'),
    sa.UniqueConstraint('scented_spray'),
    sa.UniqueConstraint('second_ctas'),
    sa.UniqueConstraint('side_blasters'),
    sa.UniqueConstraint('side_omni'),
    sa.UniqueConstraint('tire_brushes'),
    sa.UniqueConstraint('tire_shine'),
    sa.UniqueConstraint('top_omni'),
    sa.UniqueConstraint('topbrush2'),
    sa.UniqueConstraint('wrap1_ds_ps'),
    sa.UniqueConstraint('wrap2_ds_ps')
    )
    op.add_column('events', sa.Column('name', sa.String(length=120), nullable=False))
    op.drop_constraint('events_full_name_key', 'events', type_='unique')
    op.create_unique_constraint(None, 'events', ['name'])
    op.drop_column('events', 'full_name')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('events', sa.Column('full_name', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'events', type_='unique')
    op.create_unique_constraint('events_full_name_key', 'events', ['full_name'])
    op.drop_column('events', 'name')
    op.drop_table('ghost_car')
    # ### end Alembic commands ###
