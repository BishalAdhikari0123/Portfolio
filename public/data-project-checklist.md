# Data Project Checklist

A short checklist for turning a data question into a project that another person can trust.

## 1. Define the decision

- What decision should the analysis support?
- Who will use the result?
- What action changes when the result changes?
- What is explicitly out of scope?

## 2. Understand the data

- Record the source, owner, date, licence, and geography.
- Write a data dictionary before modelling.
- Check missing values, duplicate rows, impossible values, and unexpected categories.
- Document how sensitive fields and proxy variables are handled.

## 3. Build a reproducible baseline

- Keep ingestion, cleaning, feature generation, and modelling separate.
- Fix random seeds where randomness is used.
- Store configuration and assumptions in version control.
- Start with a simple baseline before trying a complex model.

## 4. Evaluate honestly

- Choose train, validation, and test data before looking at test results.
- Check for target leakage and duplicated entities across splits.
- Report metrics that match the real cost of errors.
- Inspect false positives and false negatives, not only one headline score.
- Calibrate probabilities when people will interpret them as risk.

## 5. Explain the output

- Show the strongest contributing features with their limitations.
- Explain uncertainty and where the model should not be used.
- Use local examples carefully and avoid implying individual-level conclusions from area-level data.
- Ask a subject-matter expert to review the interpretation.

## 6. Ship a useful result

- Include a short README with setup and reproduction steps.
- Add tests for data quality and important model behaviour.
- Provide a small dashboard, report, or API that matches the user's workflow.
- Record the model version, data version, and date of the result.

## 7. Review after release

- Monitor input drift, missingness, performance, and user feedback.
- Define who can pause or retire the model.
- Revisit fairness, privacy, and proxy risk as the context changes.

See the implementation example at https://bishaladhikari1.com.np/projects/community-support-risk-explorer.
