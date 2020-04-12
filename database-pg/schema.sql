


CREATE TABLE shoes (
   DATA jsonb
   -- id SERIAL NOT NULL PRIMARY KEY
   -- name TEXT NOT NULL,
   -- "discountPrice" INTEGER,
   -- type TEXT,
   -- collection TEXT [],
   -- image TEXT,
   -- "nikeID" INTEGER
);

CREATE INDEX ON shoes((DATA->>'nikeID'));
CREATE INDEX ON shoes(cast(DATA->>'discountPrice' AS int));
