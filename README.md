# sin-validator
Validating Sin Numbers

Assumptions:

1. User can enter the sin using CLI.
2. There are only 2 rules for the SIN to be valid.
3. Rule 1: Length must be exactly 9 digits.
4. Rule 2: When every 2nd digit in the SIN is multiplied by 2, and then added together, the sum should be divisible by 10. Any digit over 9 will be seperated into its individual values when added up.

Steps to run the validator:

1. Clone the repo.
2. Install Node(version 19 and above).
3. Run `npm i`.
4. Run `npm run validate`.
