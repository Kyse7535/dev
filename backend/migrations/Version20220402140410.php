<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220402140410 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX IDX_8244BE22BCF5E72D');
        $this->addSql('DROP INDEX IDX_8244BE224BBC2705');
        $this->addSql('CREATE TEMPORARY TABLE __temp__film AS SELECT id, version_id, categorie_id, titre, duree, resume FROM film');
        $this->addSql('DROP TABLE film');
        $this->addSql('CREATE TABLE film (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, version_id INTEGER NOT NULL, categorie_id INTEGER NOT NULL, titre VARCHAR(255) NOT NULL, duree INTEGER NOT NULL, resume CLOB NOT NULL, CONSTRAINT FK_8244BE224BBC2705 FOREIGN KEY (version_id) REFERENCES version (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_8244BE22BCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO film (id, version_id, categorie_id, titre, duree, resume) SELECT id, version_id, categorie_id, titre, duree, resume FROM __temp__film');
        $this->addSql('DROP TABLE __temp__film');
        $this->addSql('CREATE INDEX IDX_8244BE22BCF5E72D ON film (categorie_id)');
        $this->addSql('CREATE INDEX IDX_8244BE224BBC2705 ON film (version_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX IDX_8244BE224BBC2705');
        $this->addSql('DROP INDEX IDX_8244BE22BCF5E72D');
        $this->addSql('CREATE TEMPORARY TABLE __temp__film AS SELECT id, version_id, categorie_id, titre, duree, resume FROM film');
        $this->addSql('DROP TABLE film');
        $this->addSql('CREATE TABLE film (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, version_id INTEGER NOT NULL, categorie_id INTEGER NOT NULL, titre VARCHAR(255) NOT NULL, duree INTEGER NOT NULL, resume CLOB NOT NULL)');
        $this->addSql('INSERT INTO film (id, version_id, categorie_id, titre, duree, resume) SELECT id, version_id, categorie_id, titre, duree, resume FROM __temp__film');
        $this->addSql('DROP TABLE __temp__film');
        $this->addSql('CREATE INDEX IDX_8244BE224BBC2705 ON film (version_id)');
        $this->addSql('CREATE INDEX IDX_8244BE22BCF5E72D ON film (categorie_id)');
    }
}
