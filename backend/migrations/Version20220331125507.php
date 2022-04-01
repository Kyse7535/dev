<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220331125507 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categorie (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, nom VARCHAR(255) NOT NULL)');
        $this->addSql('CREATE TABLE film (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, categorie_id INTEGER NOT NULL, titre VARCHAR(255) NOT NULL, duree INTEGER NOT NULL, resume CLOB NOT NULL)');
        $this->addSql('CREATE INDEX IDX_8244BE22BCF5E72D ON film (categorie_id)');
        $this->addSql('CREATE TABLE film_version (film_id INTEGER NOT NULL, version_id INTEGER NOT NULL, PRIMARY KEY(film_id, version_id))');
        $this->addSql('CREATE INDEX IDX_5FA2C8E0567F5183 ON film_version (film_id)');
        $this->addSql('CREATE INDEX IDX_5FA2C8E04BBC2705 ON film_version (version_id)');
        $this->addSql('CREATE TABLE version (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, type VARCHAR(255) NOT NULL)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE categorie');
        $this->addSql('DROP TABLE film');
        $this->addSql('DROP TABLE film_version');
        $this->addSql('DROP TABLE version');
    }
}
