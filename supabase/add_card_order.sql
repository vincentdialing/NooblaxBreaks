-- Add display_order column to cards table
ALTER TABLE cards ADD COLUMN IF NOT EXISTS display_order INT DEFAULT 0;

-- Initialize display_order based on existing ID
UPDATE cards SET display_order = id WHERE display_order IS NULL OR display_order = 0;
